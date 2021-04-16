// https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PersistentVolumeConfig extends cdktf.TerraformMetaArguments {
  /** metadata block */
  readonly metadata: PersistentVolumeMetadata[];
  /** spec block */
  readonly spec: PersistentVolumeSpec[];
  /** timeouts block */
  readonly timeouts?: PersistentVolumeTimeouts;
}
export interface PersistentVolumeMetadata {
  /** An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the persistent volume, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
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
  /** The name of the PersistentVolumeClaim */
  readonly name: string;
  /** The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified. */
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
  /** The label key that the selector applies to. */
  readonly key: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. */
  readonly operator: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
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
  /** The label key that the selector applies to. */
  readonly key: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. */
  readonly operator: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
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
  /** match_expressions block */
  readonly matchExpressions?: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[];
  /** match_fields block */
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
  /** node_selector_term block */
  readonly nodeSelectorTerm: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm[];
}

function persistentVolumeSpecNodeAffinityRequiredToTerraform(struct?: PersistentVolumeSpecNodeAffinityRequired): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_selector_term: cdktf.listMapper(persistentVolumeSpecNodeAffinityRequiredNodeSelectorTermToTerraform)(struct!.nodeSelectorTerm),
  }
}

export interface PersistentVolumeSpecNodeAffinity {
  /** required block */
  readonly required?: PersistentVolumeSpecNodeAffinityRequired[];
}

function persistentVolumeSpecNodeAffinityToTerraform(struct?: PersistentVolumeSpecNodeAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    required: cdktf.listMapper(persistentVolumeSpecNodeAffinityRequiredToTerraform)(struct!.required),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  readonly partition?: number;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly readOnly?: boolean;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
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
  /** Host Caching mode: None, Read Only, Read Write. */
  readonly cachingMode: string;
  /** The URI the data disk in the blob storage */
  readonly dataDiskUri: string;
  /** The Name of the data disk in the blob storage */
  readonly diskName: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared */
  readonly kind?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
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
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** The name of secret that contains Azure Storage Account Name and Key */
  readonly secretName: string;
  /** The namespace of the secret that contains Azure Storage Account Name and Key. For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace. */
  readonly secretNamespace?: string;
  /** Share Name */
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
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
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
  /** Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly monitors: string[];
  /** Used as the mounted root, rather than the full Ceph tree, default is / */
  readonly path?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly secretFile?: string;
  /** User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly user?: string;
  /** secret_ref block */
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
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly fsType?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly readOnly?: boolean;
  /** Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
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
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
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
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
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
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
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
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
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
  /** the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi */
  readonly readOnly?: boolean;
  /** Attributes of the volume to publish. */
  readonly volumeAttributes?: { [key: string]: string };
  /** A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly volumeHandle: string;
  /** controller_expand_secret_ref block */
  readonly controllerExpandSecretRef?: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef[];
  /** controller_publish_secret_ref block */
  readonly controllerPublishSecretRef?: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef[];
  /** node_publish_secret_ref block */
  readonly nodePublishSecretRef?: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef[];
  /** node_stage_secret_ref block */
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
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** FC target lun number */
  readonly lun: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** FC target worldwide names (WWNs) */
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
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
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
  /** Driver is the name of the driver to use for this volume. */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  readonly fsType?: string;
  /** Extra command options if any. */
  readonly options?: { [key: string]: string };
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** secret_ref block */
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
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  readonly datasetName?: string;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
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
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly partition?: number;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly pdName: string;
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
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
  /** The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly endpointsName: string;
  /** The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly path: string;
  /** Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
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
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath */
  readonly path?: string;
  /** Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice */
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
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi */
  readonly fsType?: string;
  /** Target iSCSI Qualified Name. */
  readonly iqn: string;
  /** iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  readonly iscsiInterface?: string;
  /** iSCSI target lun number. */
  readonly lun?: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. */
  readonly readOnly?: boolean;
  /** iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
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
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local */
  readonly path?: string;
}

function persistentVolumeSpecPersistentVolumeSourceLocalToTerraform(struct?: PersistentVolumeSpecPersistentVolumeSourceLocal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface PersistentVolumeSpecPersistentVolumeSourceNfs {
  /** Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly path: string;
  /** Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly readOnly?: boolean;
  /** Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
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
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** ID that identifies Photon Controller persistent disk */
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
  /** Group to map volume access to Default is no group */
  readonly group?: string;
  /** Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
  readonly readOnly?: boolean;
  /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
  readonly registry: string;
  /** User to map volume access to Defaults to serivceaccount user */
  readonly user?: string;
  /** Volume is a string that references an already created Quobyte volume by name. */
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
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
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
  /** A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly cephMonitors: string[];
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd */
  readonly fsType?: string;
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly keyring?: string;
  /** The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly radosUser?: string;
  /** The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly rbdImage: string;
  /** The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. */
  readonly rbdPool?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** secret_ref block */
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
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Path that identifies vSphere volume vmdk */
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
  /** aws_elastic_block_store block */
  readonly awsElasticBlockStore?: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore[];
  /** azure_disk block */
  readonly azureDisk?: PersistentVolumeSpecPersistentVolumeSourceAzureDisk[];
  /** azure_file block */
  readonly azureFile?: PersistentVolumeSpecPersistentVolumeSourceAzureFile[];
  /** ceph_fs block */
  readonly cephFs?: PersistentVolumeSpecPersistentVolumeSourceCephFs[];
  /** cinder block */
  readonly cinder?: PersistentVolumeSpecPersistentVolumeSourceCinder[];
  /** csi block */
  readonly csi?: PersistentVolumeSpecPersistentVolumeSourceCsi[];
  /** fc block */
  readonly fc?: PersistentVolumeSpecPersistentVolumeSourceFc[];
  /** flex_volume block */
  readonly flexVolume?: PersistentVolumeSpecPersistentVolumeSourceFlexVolume[];
  /** flocker block */
  readonly flocker?: PersistentVolumeSpecPersistentVolumeSourceFlocker[];
  /** gce_persistent_disk block */
  readonly gcePersistentDisk?: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk[];
  /** glusterfs block */
  readonly glusterfs?: PersistentVolumeSpecPersistentVolumeSourceGlusterfs[];
  /** host_path block */
  readonly hostPath?: PersistentVolumeSpecPersistentVolumeSourceHostPath[];
  /** iscsi block */
  readonly iscsi?: PersistentVolumeSpecPersistentVolumeSourceIscsi[];
  /** local block */
  readonly local?: PersistentVolumeSpecPersistentVolumeSourceLocal[];
  /** nfs block */
  readonly nfs?: PersistentVolumeSpecPersistentVolumeSourceNfs[];
  /** photon_persistent_disk block */
  readonly photonPersistentDisk?: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk[];
  /** quobyte block */
  readonly quobyte?: PersistentVolumeSpecPersistentVolumeSourceQuobyte[];
  /** rbd block */
  readonly rbd?: PersistentVolumeSpecPersistentVolumeSourceRbd[];
  /** vsphere_volume block */
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
  /** Contains all ways the volume can be mounted. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes */
  readonly accessModes: string[];
  /** A description of the persistent volume's resources and capacity. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#capacity */
  readonly capacity: { [key: string]: string };
  /** A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. */
  readonly mountOptions?: string[];
  /** What happens to a persistent volume when released from its claim. Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#recycling-policy */
  readonly persistentVolumeReclaimPolicy?: string;
  /** A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class */
  readonly storageClassName?: string;
  /** Defines if a volume is intended to be used with a formatted filesystem. or to remain in raw block state. */
  readonly volumeMode?: string;
  /** claim_ref block */
  readonly claimRef?: PersistentVolumeSpecClaimRef[];
  /** node_affinity block */
  readonly nodeAffinity?: PersistentVolumeSpecNodeAffinity[];
  /** persistent_volume_source block */
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
  readonly create?: string;
}

function persistentVolumeTimeoutsToTerraform(struct?: PersistentVolumeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


// Resource

export class PersistentVolume extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
