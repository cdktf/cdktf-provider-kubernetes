// https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PersistentVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#metadata PersistentVolume#metadata}
  */
  readonly metadata: PersistentVolumeMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#spec PersistentVolume#spec}
  */
  readonly spec: PersistentVolumeSpec[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#timeouts PersistentVolume#timeouts}
  */
  readonly timeouts?: PersistentVolumeTimeouts;
}
export interface PersistentVolumeMetadata {
  /**
  * An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#annotations PersistentVolume#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#labels PersistentVolume#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the persistent volume, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#name PersistentVolume#name}
  */
  readonly name?: string;
}

function persistentVolumeMetadataToTerraform(struct?: PersistentVolumeMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface PersistentVolumeSpecClaimRef {
  /**
  * The name of the PersistentVolumeClaim
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#name PersistentVolume#name}
  */
  readonly name: string;
  /**
  * The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#namespace PersistentVolume#namespace}
  */
  readonly namespace?: string;
}

function persistentVolumeSpecClaimRefToTerraform(struct?: PersistentVolumeSpecClaimRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#key PersistentVolume#key}
  */
  readonly key: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#operator PersistentVolume#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#values PersistentVolume#values}
  */
  readonly values?: string[];
}

function persistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsToTerraform(struct?: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#key PersistentVolume#key}
  */
  readonly key: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#operator PersistentVolume#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#values PersistentVolume#values}
  */
  readonly values?: string[];
}

function persistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsToTerraform(struct?: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm {
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#match_expressions PersistentVolume#match_expressions}
  */
  readonly matchExpressions?: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[];
  /**
  * match_fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#match_fields PersistentVolume#match_fields}
  */
  readonly matchFields?: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields[];
}

function persistentVolumeSpecNodeAffinityRequiredNodeSelectorTermToTerraform(struct?: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_expressions: cdktf.listMapper(persistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsToTerraform)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(persistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsToTerraform)(struct!.matchFields),
  }
}

export interface PersistentVolumeSpecNodeAffinityRequired {
  /**
  * node_selector_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#node_selector_term PersistentVolume#node_selector_term}
  */
  readonly nodeSelectorTerm: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm[];
}

function persistentVolumeSpecNodeAffinityRequiredToTerraform(struct?: PersistentVolumeSpecNodeAffinityRequired): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_selector_term: cdktf.listMapper(persistentVolumeSpecNodeAffinityRequiredNodeSelectorTermToTerraform)(struct!.nodeSelectorTerm),
  }
}

export interface PersistentVolumeSpecNodeAffinity {
  /**
  * required block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#required PersistentVolume#required}
  */
  readonly required?: PersistentVolumeSpecNodeAffinityRequired[];
}

function persistentVolumeSpecNodeAffinityToTerraform(struct?: PersistentVolumeSpecNodeAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    required: cdktf.listMapper(persistentVolumeSpecNodeAffinityRequiredToTerraform)(struct!.required),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fs_type PersistentVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#partition PersistentVolume#partition}
  */
  readonly partition?: number;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#volume_id PersistentVolume#volume_id}
  */
  readonly volumeId: string;
}

function persistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceAzureDisk {
  /**
  * Host Caching mode: None, Read Only, Read Write.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#caching_mode PersistentVolume#caching_mode}
  */
  readonly cachingMode: string;
  /**
  * The URI the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#data_disk_uri PersistentVolume#data_disk_uri}
  */
  readonly dataDiskUri: string;
  /**
  * The Name of the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#disk_name PersistentVolume#disk_name}
  */
  readonly diskName: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fs_type PersistentVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#kind PersistentVolume#kind}
  */
  readonly kind?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
}

function persistentVolumeSpecPersistentVolumeSourceAzureDiskToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceAzureDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    data_disk_uri: cdktf.stringToTerraform(struct!.dataDiskUri),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceAzureFile {
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * The name of secret that contains Azure Storage Account Name and Key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#secret_name PersistentVolume#secret_name}
  */
  readonly secretName: string;
  /**
  * The namespace of the secret that contains Azure Storage Account Name and Key. For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#secret_namespace PersistentVolume#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * Share Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#share_name PersistentVolume#share_name}
  */
  readonly shareName: string;
}

function persistentVolumeSpecPersistentVolumeSourceAzureFileToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceAzureFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#name PersistentVolume#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#namespace PersistentVolume#namespace}
  */
  readonly namespace?: string;
}

function persistentVolumeSpecPersistentVolumeSourceCephFsSecretRefToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceCephFs {
  /**
  * Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#monitors PersistentVolume#monitors}
  */
  readonly monitors: string[];
  /**
  * Used as the mounted root, rather than the full Ceph tree, default is /
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#path PersistentVolume#path}
  */
  readonly path?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#secret_file PersistentVolume#secret_file}
  */
  readonly secretFile?: string;
  /**
  * User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#user PersistentVolume#user}
  */
  readonly user?: string;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#secret_ref PersistentVolume#secret_ref}
  */
  readonly secretRef?: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef[];
}

function persistentVolumeSpecPersistentVolumeSourceCephFsToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceCephFs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    user: cdktf.stringToTerraform(struct!.user),
    secret_ref: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceCephFsSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceCinder {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fs_type PersistentVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#volume_id PersistentVolume#volume_id}
  */
  readonly volumeId: string;
}

function persistentVolumeSpecPersistentVolumeSourceCinderToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceCinder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#name PersistentVolume#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#namespace PersistentVolume#namespace}
  */
  readonly namespace?: string;
}

function persistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#name PersistentVolume#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#namespace PersistentVolume#namespace}
  */
  readonly namespace?: string;
}

function persistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#name PersistentVolume#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#namespace PersistentVolume#namespace}
  */
  readonly namespace?: string;
}

function persistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#name PersistentVolume#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#namespace PersistentVolume#namespace}
  */
  readonly namespace?: string;
}

function persistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceCsi {
  /**
  * the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#driver PersistentVolume#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fs_type PersistentVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Attributes of the volume to publish.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#volume_attributes PersistentVolume#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string };
  /**
  * A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#volume_handle PersistentVolume#volume_handle}
  */
  readonly volumeHandle: string;
  /**
  * controller_expand_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#controller_expand_secret_ref PersistentVolume#controller_expand_secret_ref}
  */
  readonly controllerExpandSecretRef?: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef[];
  /**
  * controller_publish_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#controller_publish_secret_ref PersistentVolume#controller_publish_secret_ref}
  */
  readonly controllerPublishSecretRef?: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef[];
  /**
  * node_publish_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#node_publish_secret_ref PersistentVolume#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef[];
  /**
  * node_stage_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#node_stage_secret_ref PersistentVolume#node_stage_secret_ref}
  */
  readonly nodeStageSecretRef?: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef[];
}

function persistentVolumeSpecPersistentVolumeSourceCsiToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceCsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.volumeAttributes),
    volume_handle: cdktf.stringToTerraform(struct!.volumeHandle),
    controller_expand_secret_ref: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefToTerraform)(struct!.controllerExpandSecretRef),
    controller_publish_secret_ref: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefToTerraform)(struct!.controllerPublishSecretRef),
    node_publish_secret_ref: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefToTerraform)(struct!.nodePublishSecretRef),
    node_stage_secret_ref: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefToTerraform)(struct!.nodeStageSecretRef),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceFc {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fs_type PersistentVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * FC target lun number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#lun PersistentVolume#lun}
  */
  readonly lun: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * FC target worldwide names (WWNs)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#target_ww_ns PersistentVolume#target_ww_ns}
  */
  readonly targetWwNs: string[];
}

function persistentVolumeSpecPersistentVolumeSourceFcToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceFc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetWwNs),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#name PersistentVolume#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#namespace PersistentVolume#namespace}
  */
  readonly namespace?: string;
}

function persistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceFlexVolume {
  /**
  * Driver is the name of the driver to use for this volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#driver PersistentVolume#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fs_type PersistentVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * Extra command options if any.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#options PersistentVolume#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#secret_ref PersistentVolume#secret_ref}
  */
  readonly secretRef?: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef[];
}

function persistentVolumeSpecPersistentVolumeSourceFlexVolumeToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceFlexVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceFlocker {
  /**
  * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#dataset_name PersistentVolume#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * UUID of the dataset. This is unique identifier of a Flocker dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#dataset_uuid PersistentVolume#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

function persistentVolumeSpecPersistentVolumeSourceFlockerToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceFlocker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fs_type PersistentVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#partition PersistentVolume#partition}
  */
  readonly partition?: number;
  /**
  * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#pd_name PersistentVolume#pd_name}
  */
  readonly pdName: string;
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
}

function persistentVolumeSpecPersistentVolumeSourceGcePersistentDiskToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceGlusterfs {
  /**
  * The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#endpoints_name PersistentVolume#endpoints_name}
  */
  readonly endpointsName: string;
  /**
  * The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#path PersistentVolume#path}
  */
  readonly path: string;
  /**
  * Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
}

function persistentVolumeSpecPersistentVolumeSourceGlusterfsToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceGlusterfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoints_name: cdktf.stringToTerraform(struct!.endpointsName),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceHostPath {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#path PersistentVolume#path}
  */
  readonly path?: string;
  /**
  * Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#type PersistentVolume#type}
  */
  readonly type?: string;
}

function persistentVolumeSpecPersistentVolumeSourceHostPathToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceHostPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceIscsi {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fs_type PersistentVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * Target iSCSI Qualified Name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#iqn PersistentVolume#iqn}
  */
  readonly iqn: string;
  /**
  * iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#iscsi_interface PersistentVolume#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * iSCSI target lun number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#lun PersistentVolume#lun}
  */
  readonly lun?: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#target_portal PersistentVolume#target_portal}
  */
  readonly targetPortal: string;
}

function persistentVolumeSpecPersistentVolumeSourceIscsiToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceIscsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceLocal {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#path PersistentVolume#path}
  */
  readonly path?: string;
}

function persistentVolumeSpecPersistentVolumeSourceLocalToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceLocal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceNfs {
  /**
  * Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#path PersistentVolume#path}
  */
  readonly path: string;
  /**
  * Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#server PersistentVolume#server}
  */
  readonly server: string;
}

function persistentVolumeSpecPersistentVolumeSourceNfsToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceNfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fs_type PersistentVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * ID that identifies Photon Controller persistent disk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#pd_id PersistentVolume#pd_id}
  */
  readonly pdId: string;
}

function persistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceQuobyte {
  /**
  * Group to map volume access to Default is no group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#group PersistentVolume#group}
  */
  readonly group?: string;
  /**
  * Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#registry PersistentVolume#registry}
  */
  readonly registry: string;
  /**
  * User to map volume access to Defaults to serivceaccount user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#user PersistentVolume#user}
  */
  readonly user?: string;
  /**
  * Volume is a string that references an already created Quobyte volume by name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#volume PersistentVolume#volume}
  */
  readonly volume: string;
}

function persistentVolumeSpecPersistentVolumeSourceQuobyteToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceQuobyte): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#name PersistentVolume#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#namespace PersistentVolume#namespace}
  */
  readonly namespace?: string;
}

function persistentVolumeSpecPersistentVolumeSourceRbdSecretRefToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceRbd {
  /**
  * A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#ceph_monitors PersistentVolume#ceph_monitors}
  */
  readonly cephMonitors: string[];
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fs_type PersistentVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#keyring PersistentVolume#keyring}
  */
  readonly keyring?: string;
  /**
  * The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#rados_user PersistentVolume#rados_user}
  */
  readonly radosUser?: string;
  /**
  * The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#rbd_image PersistentVolume#rbd_image}
  */
  readonly rbdImage: string;
  /**
  * The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#rbd_pool PersistentVolume#rbd_pool}
  */
  readonly rbdPool?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#read_only PersistentVolume#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#secret_ref PersistentVolume#secret_ref}
  */
  readonly secretRef?: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef[];
}

function persistentVolumeSpecPersistentVolumeSourceRbdToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceRbd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ceph_monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cephMonitors),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    rados_user: cdktf.stringToTerraform(struct!.radosUser),
    rbd_image: cdktf.stringToTerraform(struct!.rbdImage),
    rbd_pool: cdktf.stringToTerraform(struct!.rbdPool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceRbdSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceVsphereVolume {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fs_type PersistentVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * Path that identifies vSphere volume vmdk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#volume_path PersistentVolume#volume_path}
  */
  readonly volumePath: string;
}

function persistentVolumeSpecPersistentVolumeSourceVsphereVolumeToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSource {
  /**
  * aws_elastic_block_store block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#aws_elastic_block_store PersistentVolume#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore[];
  /**
  * azure_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#azure_disk PersistentVolume#azure_disk}
  */
  readonly azureDisk?: PersistentVolumeSpecPersistentVolumeSourceAzureDisk[];
  /**
  * azure_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#azure_file PersistentVolume#azure_file}
  */
  readonly azureFile?: PersistentVolumeSpecPersistentVolumeSourceAzureFile[];
  /**
  * ceph_fs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#ceph_fs PersistentVolume#ceph_fs}
  */
  readonly cephFs?: PersistentVolumeSpecPersistentVolumeSourceCephFs[];
  /**
  * cinder block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#cinder PersistentVolume#cinder}
  */
  readonly cinder?: PersistentVolumeSpecPersistentVolumeSourceCinder[];
  /**
  * csi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#csi PersistentVolume#csi}
  */
  readonly csi?: PersistentVolumeSpecPersistentVolumeSourceCsi[];
  /**
  * fc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#fc PersistentVolume#fc}
  */
  readonly fc?: PersistentVolumeSpecPersistentVolumeSourceFc[];
  /**
  * flex_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#flex_volume PersistentVolume#flex_volume}
  */
  readonly flexVolume?: PersistentVolumeSpecPersistentVolumeSourceFlexVolume[];
  /**
  * flocker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#flocker PersistentVolume#flocker}
  */
  readonly flocker?: PersistentVolumeSpecPersistentVolumeSourceFlocker[];
  /**
  * gce_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#gce_persistent_disk PersistentVolume#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk[];
  /**
  * glusterfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#glusterfs PersistentVolume#glusterfs}
  */
  readonly glusterfs?: PersistentVolumeSpecPersistentVolumeSourceGlusterfs[];
  /**
  * host_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#host_path PersistentVolume#host_path}
  */
  readonly hostPath?: PersistentVolumeSpecPersistentVolumeSourceHostPath[];
  /**
  * iscsi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#iscsi PersistentVolume#iscsi}
  */
  readonly iscsi?: PersistentVolumeSpecPersistentVolumeSourceIscsi[];
  /**
  * local block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#local PersistentVolume#local}
  */
  readonly local?: PersistentVolumeSpecPersistentVolumeSourceLocal[];
  /**
  * nfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#nfs PersistentVolume#nfs}
  */
  readonly nfs?: PersistentVolumeSpecPersistentVolumeSourceNfs[];
  /**
  * photon_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#photon_persistent_disk PersistentVolume#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk[];
  /**
  * quobyte block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#quobyte PersistentVolume#quobyte}
  */
  readonly quobyte?: PersistentVolumeSpecPersistentVolumeSourceQuobyte[];
  /**
  * rbd block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#rbd PersistentVolume#rbd}
  */
  readonly rbd?: PersistentVolumeSpecPersistentVolumeSourceRbd[];
  /**
  * vsphere_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#vsphere_volume PersistentVolume#vsphere_volume}
  */
  readonly vsphereVolume?: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume[];
}

function persistentVolumeSpecPersistentVolumeSourceToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_elastic_block_store: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreToTerraform)(struct!.awsElasticBlockStore),
    azure_disk: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceAzureDiskToTerraform)(struct!.azureDisk),
    azure_file: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceAzureFileToTerraform)(struct!.azureFile),
    ceph_fs: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceCephFsToTerraform)(struct!.cephFs),
    cinder: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceCinderToTerraform)(struct!.cinder),
    csi: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceCsiToTerraform)(struct!.csi),
    fc: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceFcToTerraform)(struct!.fc),
    flex_volume: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceFlexVolumeToTerraform)(struct!.flexVolume),
    flocker: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceFlockerToTerraform)(struct!.flocker),
    gce_persistent_disk: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceGcePersistentDiskToTerraform)(struct!.gcePersistentDisk),
    glusterfs: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceGlusterfsToTerraform)(struct!.glusterfs),
    host_path: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceHostPathToTerraform)(struct!.hostPath),
    iscsi: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceIscsiToTerraform)(struct!.iscsi),
    local: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceLocalToTerraform)(struct!.local),
    nfs: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceNfsToTerraform)(struct!.nfs),
    photon_persistent_disk: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskToTerraform)(struct!.photonPersistentDisk),
    quobyte: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceQuobyteToTerraform)(struct!.quobyte),
    rbd: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceRbdToTerraform)(struct!.rbd),
    vsphere_volume: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceVsphereVolumeToTerraform)(struct!.vsphereVolume),
  }
}

export interface PersistentVolumeSpec {
  /**
  * Contains all ways the volume can be mounted. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#access_modes PersistentVolume#access_modes}
  */
  readonly accessModes: string[];
  /**
  * A description of the persistent volume's resources and capacity. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#capacity
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#capacity PersistentVolume#capacity}
  */
  readonly capacity: { [key: string]: string };
  /**
  * A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#mount_options PersistentVolume#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * What happens to a persistent volume when released from its claim. Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#recycling-policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#persistent_volume_reclaim_policy PersistentVolume#persistent_volume_reclaim_policy}
  */
  readonly persistentVolumeReclaimPolicy?: string;
  /**
  * A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#storage_class_name PersistentVolume#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * Defines if a volume is intended to be used with a formatted filesystem. or to remain in raw block state.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#volume_mode PersistentVolume#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * claim_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#claim_ref PersistentVolume#claim_ref}
  */
  readonly claimRef?: PersistentVolumeSpecClaimRef[];
  /**
  * node_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#node_affinity PersistentVolume#node_affinity}
  */
  readonly nodeAffinity?: PersistentVolumeSpecNodeAffinity[];
  /**
  * persistent_volume_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#persistent_volume_source PersistentVolume#persistent_volume_source}
  */
  readonly persistentVolumeSource: PersistentVolumeSpecPersistentVolumeSource[];
}

function persistentVolumeSpecToTerraform(struct?: PersistentVolumeSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessModes),
    capacity: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.capacity),
    mount_options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.mountOptions),
    persistent_volume_reclaim_policy: cdktf.stringToTerraform(struct!.persistentVolumeReclaimPolicy),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    claim_ref: cdktf.listMapper(persistentVolumeSpecClaimRefToTerraform)(struct!.claimRef),
    node_affinity: cdktf.listMapper(persistentVolumeSpecNodeAffinityToTerraform)(struct!.nodeAffinity),
    persistent_volume_source: cdktf.listMapper(persistentVolumeSpecPersistentVolumeSourceToTerraform)(struct!.persistentVolumeSource),
  }
}

export interface PersistentVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html#create PersistentVolume#create}
  */
  readonly create?: string;
}

function persistentVolumeTimeoutsToTerraform(struct?: PersistentVolumeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html kubernetes_persistent_volume}
*/
export class PersistentVolume extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html kubernetes_persistent_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PersistentVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: PersistentVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_persistent_volume',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: PersistentVolumeMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: PersistentVolumeMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: PersistentVolumeSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: PersistentVolumeSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PersistentVolumeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PersistentVolumeTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(persistentVolumeMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(persistentVolumeSpecToTerraform)(this._spec),
      timeouts: persistentVolumeTimeoutsToTerraform(this._timeouts),
    };
  }
}
