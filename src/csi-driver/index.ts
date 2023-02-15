// https://www.terraform.io/docs/providers/kubernetes/r/csi_driver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsiDriverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver#id CsiDriver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver#metadata CsiDriver#metadata}
  */
  readonly metadata: CsiDriverMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver#spec CsiDriver#spec}
  */
  readonly spec?: CsiDriverSpec;
}
export interface CsiDriverMetadata {
  /**
  * An unstructured key value map stored with the csi driver that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver#annotations CsiDriver#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver#generate_name CsiDriver#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the csi driver. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver#labels CsiDriver#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the csi driver, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver#name CsiDriver#name}
  */
  readonly name?: string;
}

export function csiDriverMetadataToTerraform(struct?: CsiDriverMetadataOutputReference | CsiDriverMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CsiDriverMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsiDriverMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiDriverMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface CsiDriverSpec {
  /**
  * Indicates if the CSI volume driver requires an attach operation
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver#attach_required CsiDriver#attach_required}
  */
  readonly attachRequired: boolean | cdktf.IResolvable;
  /**
  * Indicates that the CSI volume driver requires additional pod information (like podName, podUID, etc.) during mount operations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver#pod_info_on_mount CsiDriver#pod_info_on_mount}
  */
  readonly podInfoOnMount?: boolean | cdktf.IResolvable;
  /**
  * Defines what kind of volumes this CSI volume driver supports
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver#volume_lifecycle_modes CsiDriver#volume_lifecycle_modes}
  */
  readonly volumeLifecycleModes?: string[];
}

export function csiDriverSpecToTerraform(struct?: CsiDriverSpecOutputReference | CsiDriverSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_required: cdktf.booleanToTerraform(struct!.attachRequired),
    pod_info_on_mount: cdktf.booleanToTerraform(struct!.podInfoOnMount),
    volume_lifecycle_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeLifecycleModes),
  }
}

export class CsiDriverSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsiDriverSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachRequired = this._attachRequired;
    }
    if (this._podInfoOnMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.podInfoOnMount = this._podInfoOnMount;
    }
    if (this._volumeLifecycleModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeLifecycleModes = this._volumeLifecycleModes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiDriverSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attachRequired = undefined;
      this._podInfoOnMount = undefined;
      this._volumeLifecycleModes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attachRequired = value.attachRequired;
      this._podInfoOnMount = value.podInfoOnMount;
      this._volumeLifecycleModes = value.volumeLifecycleModes;
    }
  }

  // attach_required - computed: false, optional: false, required: true
  private _attachRequired?: boolean | cdktf.IResolvable; 
  public get attachRequired() {
    return this.getBooleanAttribute('attach_required');
  }
  public set attachRequired(value: boolean | cdktf.IResolvable) {
    this._attachRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachRequiredInput() {
    return this._attachRequired;
  }

  // pod_info_on_mount - computed: false, optional: true, required: false
  private _podInfoOnMount?: boolean | cdktf.IResolvable; 
  public get podInfoOnMount() {
    return this.getBooleanAttribute('pod_info_on_mount');
  }
  public set podInfoOnMount(value: boolean | cdktf.IResolvable) {
    this._podInfoOnMount = value;
  }
  public resetPodInfoOnMount() {
    this._podInfoOnMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInfoOnMountInput() {
    return this._podInfoOnMount;
  }

  // volume_lifecycle_modes - computed: false, optional: true, required: false
  private _volumeLifecycleModes?: string[]; 
  public get volumeLifecycleModes() {
    return this.getListAttribute('volume_lifecycle_modes');
  }
  public set volumeLifecycleModes(value: string[]) {
    this._volumeLifecycleModes = value;
  }
  public resetVolumeLifecycleModes() {
    this._volumeLifecycleModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLifecycleModesInput() {
    return this._volumeLifecycleModes;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver kubernetes_csi_driver}
*/
export class CsiDriver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_csi_driver";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver kubernetes_csi_driver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsiDriverConfig
  */
  public constructor(scope: Construct, id: string, config: CsiDriverConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_csi_driver',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.18.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CsiDriverMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CsiDriverMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new CsiDriverSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: CsiDriverSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadata: csiDriverMetadataToTerraform(this._metadata.internalValue),
      spec: csiDriverSpecToTerraform(this._spec.internalValue),
    };
  }
}
