// https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsiDriverV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html#metadata CsiDriverV1#metadata}
  */
  readonly metadata: CsiDriverV1Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html#spec CsiDriverV1#spec}
  */
  readonly spec?: CsiDriverV1Spec;
}
export interface CsiDriverV1Metadata {
  /**
  * An unstructured key value map stored with the csi driver that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html#annotations CsiDriverV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html#generate_name CsiDriverV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the csi driver. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html#labels CsiDriverV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the csi driver, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html#name CsiDriverV1#name}
  */
  readonly name?: string;
}

function csiDriverV1MetadataToTerraform(struct?: CsiDriverV1MetadataOutputReference | CsiDriverV1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CsiDriverV1MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string | undefined; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string | undefined) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}
export interface CsiDriverV1Spec {
  /**
  * Indicates if the CSI volume driver requires an attach operation
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html#attach_required CsiDriverV1#attach_required}
  */
  readonly attachRequired: boolean | cdktf.IResolvable;
  /**
  * Indicates that the CSI volume driver requires additional pod information (like podName, podUID, etc.) during mount operations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html#pod_info_on_mount CsiDriverV1#pod_info_on_mount}
  */
  readonly podInfoOnMount?: boolean | cdktf.IResolvable;
  /**
  * Defines what kind of volumes this CSI volume driver supports
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html#volume_lifecycle_modes CsiDriverV1#volume_lifecycle_modes}
  */
  readonly volumeLifecycleModes?: string[];
}

function csiDriverV1SpecToTerraform(struct?: CsiDriverV1SpecOutputReference | CsiDriverV1Spec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_required: cdktf.booleanToTerraform(struct!.attachRequired),
    pod_info_on_mount: cdktf.booleanToTerraform(struct!.podInfoOnMount),
    volume_lifecycle_modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.volumeLifecycleModes),
  }
}

export class CsiDriverV1SpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // attach_required - computed: false, optional: false, required: true
  private _attachRequired?: boolean | cdktf.IResolvable; 
  public get attachRequired() {
    return this.getBooleanAttribute('attach_required') as any;
  }
  public set attachRequired(value: boolean | cdktf.IResolvable) {
    this._attachRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachRequiredInput() {
    return this._attachRequired
  }

  // pod_info_on_mount - computed: false, optional: true, required: false
  private _podInfoOnMount?: boolean | cdktf.IResolvable | undefined; 
  public get podInfoOnMount() {
    return this.getBooleanAttribute('pod_info_on_mount') as any;
  }
  public set podInfoOnMount(value: boolean | cdktf.IResolvable | undefined) {
    this._podInfoOnMount = value;
  }
  public resetPodInfoOnMount() {
    this._podInfoOnMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInfoOnMountInput() {
    return this._podInfoOnMount
  }

  // volume_lifecycle_modes - computed: false, optional: true, required: false
  private _volumeLifecycleModes?: string[] | undefined; 
  public get volumeLifecycleModes() {
    return this.getListAttribute('volume_lifecycle_modes');
  }
  public set volumeLifecycleModes(value: string[] | undefined) {
    this._volumeLifecycleModes = value;
  }
  public resetVolumeLifecycleModes() {
    this._volumeLifecycleModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLifecycleModesInput() {
    return this._volumeLifecycleModes
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html kubernetes_csi_driver_v1}
*/
export class CsiDriverV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_csi_driver_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver_v1.html kubernetes_csi_driver_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsiDriverV1Config
  */
  public constructor(scope: Construct, id: string, config: CsiDriverV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_csi_driver_v1',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: CsiDriverV1Metadata; 
  private __metadataOutput = new CsiDriverV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: CsiDriverV1Metadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: CsiDriverV1Spec | undefined; 
  private __specOutput = new CsiDriverV1SpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: CsiDriverV1Spec | undefined) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: csiDriverV1MetadataToTerraform(this._metadata),
      spec: csiDriverV1SpecToTerraform(this._spec),
    };
  }
}
