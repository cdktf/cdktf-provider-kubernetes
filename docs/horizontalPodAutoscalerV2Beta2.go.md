# `horizontalPodAutoscalerV2Beta2` Submodule <a name="`horizontalPodAutoscalerV2Beta2` Submodule" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizontalPodAutoscalerV2Beta2 <a name="HorizontalPodAutoscalerV2Beta2" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2 kubernetes_horizontal_pod_autoscaler_v2beta2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2(scope Construct, id *string, config HorizontalPodAutoscalerV2Beta2Config) HorizontalPodAutoscalerV2Beta2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config">HorizontalPodAutoscalerV2Beta2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config">HorizontalPodAutoscalerV2Beta2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putMetadata"></a>

```go
func PutMetadata(value HorizontalPodAutoscalerV2Beta2Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putSpec"></a>

```go
func PutSpec(value HorizontalPodAutoscalerV2Beta2Spec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HorizontalPodAutoscalerV2Beta2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a HorizontalPodAutoscalerV2Beta2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HorizontalPodAutoscalerV2Beta2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HorizontalPodAutoscalerV2Beta2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the HorizontalPodAutoscalerV2Beta2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference">HorizontalPodAutoscalerV2Beta2MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference">HorizontalPodAutoscalerV2Beta2SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.metadata"></a>

```go
func Metadata() HorizontalPodAutoscalerV2Beta2MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference">HorizontalPodAutoscalerV2Beta2MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.spec"></a>

```go
func Spec() HorizontalPodAutoscalerV2Beta2SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference">HorizontalPodAutoscalerV2Beta2SpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.metadataInput"></a>

```go
func MetadataInput() HorizontalPodAutoscalerV2Beta2Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.specInput"></a>

```go
func SpecInput() HorizontalPodAutoscalerV2Beta2Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HorizontalPodAutoscalerV2Beta2Config <a name="HorizontalPodAutoscalerV2Beta2Config" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata,
	Spec: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#id HorizontalPodAutoscalerV2Beta2#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.metadata"></a>

```go
Metadata HorizontalPodAutoscalerV2Beta2Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#metadata HorizontalPodAutoscalerV2Beta2#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.spec"></a>

```go
Spec HorizontalPodAutoscalerV2Beta2Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#spec HorizontalPodAutoscalerV2Beta2#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#id HorizontalPodAutoscalerV2Beta2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### HorizontalPodAutoscalerV2Beta2Metadata <a name="HorizontalPodAutoscalerV2Beta2Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2Metadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace defines the space within which name of the horizontal pod autoscaler must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#annotations HorizontalPodAutoscalerV2Beta2#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#generate_name HorizontalPodAutoscalerV2Beta2#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#labels HorizontalPodAutoscalerV2Beta2#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace defines the space within which name of the horizontal pod autoscaler must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#namespace HorizontalPodAutoscalerV2Beta2#namespace}

---

### HorizontalPodAutoscalerV2Beta2Spec <a name="HorizontalPodAutoscalerV2Beta2Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2Spec {
	MaxReplicas: *f64,
	ScaleTargetRef: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef,
	Behavior: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior,
	Metric: interface{},
	MinReplicas: *f64,
	TargetCpuUtilizationPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.maxReplicas">MaxReplicas</a></code> | <code>*f64</code> | Upper limit for the number of pods that can be set by the autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.scaleTargetRef">ScaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a></code> | scale_target_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.behavior">Behavior</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a></code> | behavior block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.metric">Metric</a></code> | <code>interface{}</code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.minReplicas">MinReplicas</a></code> | <code>*f64</code> | Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.targetCpuUtilizationPercentage">TargetCpuUtilizationPercentage</a></code> | <code>*f64</code> | Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. |

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.maxReplicas"></a>

```go
MaxReplicas *f64
```

- *Type:* *f64

Upper limit for the number of pods that can be set by the autoscaler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#max_replicas HorizontalPodAutoscalerV2Beta2#max_replicas}

---

##### `ScaleTargetRef`<sup>Required</sup> <a name="ScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.scaleTargetRef"></a>

```go
ScaleTargetRef HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a>

scale_target_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#scale_target_ref HorizontalPodAutoscalerV2Beta2#scale_target_ref}

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.behavior"></a>

```go
Behavior HorizontalPodAutoscalerV2Beta2SpecBehavior
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a>

behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#behavior HorizontalPodAutoscalerV2Beta2#behavior}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.metric"></a>

```go
Metric interface{}
```

- *Type:* interface{}

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}

---

##### `MinReplicas`<sup>Optional</sup> <a name="MinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.minReplicas"></a>

```go
MinReplicas *f64
```

- *Type:* *f64

Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#min_replicas HorizontalPodAutoscalerV2Beta2#min_replicas}

---

##### `TargetCpuUtilizationPercentage`<sup>Optional</sup> <a name="TargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.targetCpuUtilizationPercentage"></a>

```go
TargetCpuUtilizationPercentage *f64
```

- *Type:* *f64

Target average CPU utilization (represented as a percentage of requested CPU) over all the pods.

If not specified the default autoscaling policy will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#target_cpu_utilization_percentage HorizontalPodAutoscalerV2Beta2#target_cpu_utilization_percentage}

---

### HorizontalPodAutoscalerV2Beta2SpecBehavior <a name="HorizontalPodAutoscalerV2Beta2SpecBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior {
	ScaleDown: interface{},
	ScaleUp: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior.property.scaleDown">ScaleDown</a></code> | <code>interface{}</code> | scale_down block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior.property.scaleUp">ScaleUp</a></code> | <code>interface{}</code> | scale_up block. |

---

##### `ScaleDown`<sup>Optional</sup> <a name="ScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior.property.scaleDown"></a>

```go
ScaleDown interface{}
```

- *Type:* interface{}

scale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#scale_down HorizontalPodAutoscalerV2Beta2#scale_down}

---

##### `ScaleUp`<sup>Optional</sup> <a name="ScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior.property.scaleUp"></a>

```go
ScaleUp interface{}
```

- *Type:* interface{}

scale_up block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#scale_up HorizontalPodAutoscalerV2Beta2#scale_up}

---

### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown {
	Policy: interface{},
	SelectPolicy: *string,
	StabilizationWindowSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.policy">Policy</a></code> | <code>interface{}</code> | policy block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.selectPolicy">SelectPolicy</a></code> | <code>*string</code> | Used to specify which policy should be used. If not set, the default value Max is used. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>*f64</code> | Number of seconds for which past recommendations should be considered while scaling up or scaling down. |

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.policy"></a>

```go
Policy interface{}
```

- *Type:* interface{}

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#policy HorizontalPodAutoscalerV2Beta2#policy}

---

##### `SelectPolicy`<sup>Optional</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.selectPolicy"></a>

```go
SelectPolicy *string
```

- *Type:* *string

Used to specify which policy should be used. If not set, the default value Max is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#select_policy HorizontalPodAutoscalerV2Beta2#select_policy}

---

##### `StabilizationWindowSeconds`<sup>Optional</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.stabilizationWindowSeconds"></a>

```go
StabilizationWindowSeconds *f64
```

- *Type:* *f64

Number of seconds for which past recommendations should be considered while scaling up or scaling down.

This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#stabilization_window_seconds HorizontalPodAutoscalerV2Beta2#stabilization_window_seconds}

---

### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy {
	PeriodSeconds: *f64,
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | Period specifies the window of time for which the policy should hold true. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.type">Type</a></code> | <code>*string</code> | Type is used to specify the scaling policy: Percent or Pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.value">Value</a></code> | <code>*f64</code> | Value contains the amount of change which is permitted by the policy. It must be greater than zero. |

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

Period specifies the window of time for which the policy should hold true.

PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#period_seconds HorizontalPodAutoscalerV2Beta2#period_seconds}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type is used to specify the scaling policy: Percent or Pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Value contains the amount of change which is permitted by the policy. It must be greater than zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp {
	Policy: interface{},
	SelectPolicy: *string,
	StabilizationWindowSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.policy">Policy</a></code> | <code>interface{}</code> | policy block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.selectPolicy">SelectPolicy</a></code> | <code>*string</code> | Used to specify which policy should be used. If not set, the default value Max is used. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>*f64</code> | Number of seconds for which past recommendations should be considered while scaling up or scaling down. |

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.policy"></a>

```go
Policy interface{}
```

- *Type:* interface{}

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#policy HorizontalPodAutoscalerV2Beta2#policy}

---

##### `SelectPolicy`<sup>Optional</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.selectPolicy"></a>

```go
SelectPolicy *string
```

- *Type:* *string

Used to specify which policy should be used. If not set, the default value Max is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#select_policy HorizontalPodAutoscalerV2Beta2#select_policy}

---

##### `StabilizationWindowSeconds`<sup>Optional</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.stabilizationWindowSeconds"></a>

```go
StabilizationWindowSeconds *f64
```

- *Type:* *f64

Number of seconds for which past recommendations should be considered while scaling up or scaling down.

This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#stabilization_window_seconds HorizontalPodAutoscalerV2Beta2#stabilization_window_seconds}

---

### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy {
	PeriodSeconds: *f64,
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | Period specifies the window of time for which the policy should hold true. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.type">Type</a></code> | <code>*string</code> | Type is used to specify the scaling policy: Percent or Pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.value">Value</a></code> | <code>*f64</code> | Value contains the amount of change which is permitted by the policy. It must be greater than zero. |

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

Period specifies the window of time for which the policy should hold true.

PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#period_seconds HorizontalPodAutoscalerV2Beta2#period_seconds}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type is used to specify the scaling policy: Percent or Pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Value contains the amount of change which is permitted by the policy. It must be greater than zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecMetric <a name="HorizontalPodAutoscalerV2Beta2SpecMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetric {
	Type: *string,
	ContainerResource: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource,
	External: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal,
	Object: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject,
	Pods: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods,
	Resource: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.type">Type</a></code> | <code>*string</code> | type is the type of metric source. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.containerResource">ContainerResource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a></code> | container_resource block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.external">External</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a></code> | external block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.object">Object</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a></code> | object block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.pods">Pods</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a></code> | pods block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a></code> | resource block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.type"></a>

```go
Type *string
```

- *Type:* *string

type is the type of metric source.

It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `ContainerResource`<sup>Optional</sup> <a name="ContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.containerResource"></a>

```go
ContainerResource HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a>

container_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#container_resource HorizontalPodAutoscalerV2Beta2#container_resource}

---

##### `External`<sup>Optional</sup> <a name="External" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.external"></a>

```go
External HorizontalPodAutoscalerV2Beta2SpecMetricExternal
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a>

external block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#external HorizontalPodAutoscalerV2Beta2#external}

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.object"></a>

```go
Object HorizontalPodAutoscalerV2Beta2SpecMetricObject
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a>

object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#object HorizontalPodAutoscalerV2Beta2#object}

---

##### `Pods`<sup>Optional</sup> <a name="Pods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.pods"></a>

```go
Pods HorizontalPodAutoscalerV2Beta2SpecMetricPods
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a>

pods block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#pods HorizontalPodAutoscalerV2Beta2#pods}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.resource"></a>

```go
Resource HorizontalPodAutoscalerV2Beta2SpecMetricResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#resource HorizontalPodAutoscalerV2Beta2#resource}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource <a name="HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource {
	Container: *string,
	Name: *string,
	Target: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.container">Container</a></code> | <code>*string</code> | name of the container in the pods of the scaling target. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.name">Name</a></code> | <code>*string</code> | name of the resource in question. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a></code> | target block. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.container"></a>

```go
Container *string
```

- *Type:* *string

name of the container in the pods of the scaling target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#container HorizontalPodAutoscalerV2Beta2#container}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.name"></a>

```go
Name *string
```

- *Type:* *string

name of the resource in question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.target"></a>

```go
Target HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget <a name="HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget {
	Type: *string,
	AverageUtilization: *f64,
	AverageValue: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.type">Type</a></code> | <code>*string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.averageUtilization">AverageUtilization</a></code> | <code>*f64</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.averageValue">AverageValue</a></code> | <code>*string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.value">Value</a></code> | <code>*string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.type"></a>

```go
Type *string
```

- *Type:* *string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.averageUtilization"></a>

```go
AverageUtilization *f64
```

- *Type:* *f64

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.averageValue"></a>

```go
AverageValue *string
```

- *Type:* *string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.value"></a>

```go
Value *string
```

- *Type:* *string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricExternal <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal {
	Metric: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric,
	Target: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a></code> | target block. |

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal.property.metric"></a>

```go
Metric HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal.property.target"></a>

```go
Target HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric {
	Name: *string,
	Selector: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric.property.name">Name</a></code> | <code>*string</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric.property.selector">Selector</a></code> | <code>interface{}</code> | selector block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric.property.name"></a>

```go
Name *string
```

- *Type:* *string

name is the name of the given metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric.property.selector"></a>

```go
Selector interface{}
```

- *Type:* interface{}

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#selector HorizontalPodAutoscalerV2Beta2#selector}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector {
	MatchExpressions: interface{},
	MatchLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector.property.matchExpressions">MatchExpressions</a></code> | <code>interface{}</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector.property.matchExpressions"></a>

```go
MatchExpressions interface{}
```

- *Type:* interface{}

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#match_expressions HorizontalPodAutoscalerV2Beta2#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector.property.matchLabels"></a>

```go
MatchLabels *map[string]*string
```

- *Type:* *map[string]*string

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#match_labels HorizontalPodAutoscalerV2Beta2#match_labels}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions {
	Key: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.key">Key</a></code> | <code>*string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.operator">Operator</a></code> | <code>*string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.values">Values</a></code> | <code>*[]*string</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#key HorizontalPodAutoscalerV2Beta2#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#operator HorizontalPodAutoscalerV2Beta2#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#values HorizontalPodAutoscalerV2Beta2#values}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget {
	Type: *string,
	AverageUtilization: *f64,
	AverageValue: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.type">Type</a></code> | <code>*string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.averageUtilization">AverageUtilization</a></code> | <code>*f64</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.averageValue">AverageValue</a></code> | <code>*string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.value">Value</a></code> | <code>*string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.type"></a>

```go
Type *string
```

- *Type:* *string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.averageUtilization"></a>

```go
AverageUtilization *f64
```

- *Type:* *f64

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.averageValue"></a>

```go
AverageValue *string
```

- *Type:* *string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.value"></a>

```go
Value *string
```

- *Type:* *string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObject <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject {
	DescribedObject: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject,
	Metric: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric,
	Target: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.describedObject">DescribedObject</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a></code> | described_object block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a></code> | target block. |

---

##### `DescribedObject`<sup>Required</sup> <a name="DescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.describedObject"></a>

```go
DescribedObject HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a>

described_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#described_object HorizontalPodAutoscalerV2Beta2#described_object}

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.metric"></a>

```go
Metric HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.target"></a>

```go
Target HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject {
	ApiVersion: *string,
	Kind: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | API version of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.kind">Kind</a></code> | <code>*string</code> | Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.name">Name</a></code> | <code>*string</code> | Name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.apiVersion"></a>

```go
ApiVersion *string
```

- *Type:* *string

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#api_version HorizontalPodAutoscalerV2Beta2#api_version}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#kind HorizontalPodAutoscalerV2Beta2#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric {
	Name: *string,
	Selector: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric.property.name">Name</a></code> | <code>*string</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric.property.selector">Selector</a></code> | <code>interface{}</code> | selector block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric.property.name"></a>

```go
Name *string
```

- *Type:* *string

name is the name of the given metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric.property.selector"></a>

```go
Selector interface{}
```

- *Type:* interface{}

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#selector HorizontalPodAutoscalerV2Beta2#selector}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector {
	MatchExpressions: interface{},
	MatchLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector.property.matchExpressions">MatchExpressions</a></code> | <code>interface{}</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector.property.matchExpressions"></a>

```go
MatchExpressions interface{}
```

- *Type:* interface{}

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#match_expressions HorizontalPodAutoscalerV2Beta2#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector.property.matchLabels"></a>

```go
MatchLabels *map[string]*string
```

- *Type:* *map[string]*string

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#match_labels HorizontalPodAutoscalerV2Beta2#match_labels}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions {
	Key: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.key">Key</a></code> | <code>*string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.operator">Operator</a></code> | <code>*string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.values">Values</a></code> | <code>*[]*string</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#key HorizontalPodAutoscalerV2Beta2#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#operator HorizontalPodAutoscalerV2Beta2#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#values HorizontalPodAutoscalerV2Beta2#values}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget {
	Type: *string,
	AverageUtilization: *f64,
	AverageValue: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.type">Type</a></code> | <code>*string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.averageUtilization">AverageUtilization</a></code> | <code>*f64</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.averageValue">AverageValue</a></code> | <code>*string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.value">Value</a></code> | <code>*string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.type"></a>

```go
Type *string
```

- *Type:* *string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.averageUtilization"></a>

```go
AverageUtilization *f64
```

- *Type:* *f64

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.averageValue"></a>

```go
AverageValue *string
```

- *Type:* *string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.value"></a>

```go
Value *string
```

- *Type:* *string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricPods <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods {
	Metric: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric,
	Target: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a></code> | target block. |

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods.property.metric"></a>

```go
Metric HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods.property.target"></a>

```go
Target HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric {
	Name: *string,
	Selector: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric.property.name">Name</a></code> | <code>*string</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric.property.selector">Selector</a></code> | <code>interface{}</code> | selector block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric.property.name"></a>

```go
Name *string
```

- *Type:* *string

name is the name of the given metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric.property.selector"></a>

```go
Selector interface{}
```

- *Type:* interface{}

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#selector HorizontalPodAutoscalerV2Beta2#selector}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector {
	MatchExpressions: interface{},
	MatchLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector.property.matchExpressions">MatchExpressions</a></code> | <code>interface{}</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector.property.matchExpressions"></a>

```go
MatchExpressions interface{}
```

- *Type:* interface{}

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#match_expressions HorizontalPodAutoscalerV2Beta2#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector.property.matchLabels"></a>

```go
MatchLabels *map[string]*string
```

- *Type:* *map[string]*string

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#match_labels HorizontalPodAutoscalerV2Beta2#match_labels}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions {
	Key: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.key">Key</a></code> | <code>*string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.operator">Operator</a></code> | <code>*string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.values">Values</a></code> | <code>*[]*string</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#key HorizontalPodAutoscalerV2Beta2#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#operator HorizontalPodAutoscalerV2Beta2#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#values HorizontalPodAutoscalerV2Beta2#values}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget {
	Type: *string,
	AverageUtilization: *f64,
	AverageValue: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.type">Type</a></code> | <code>*string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.averageUtilization">AverageUtilization</a></code> | <code>*f64</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.averageValue">AverageValue</a></code> | <code>*string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.value">Value</a></code> | <code>*string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.type"></a>

```go
Type *string
```

- *Type:* *string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.averageUtilization"></a>

```go
AverageUtilization *f64
```

- *Type:* *f64

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.averageValue"></a>

```go
AverageValue *string
```

- *Type:* *string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.value"></a>

```go
Value *string
```

- *Type:* *string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricResource <a name="HorizontalPodAutoscalerV2Beta2SpecMetricResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource {
	Name: *string,
	Target: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource.property.name">Name</a></code> | <code>*string</code> | name is the name of the resource in question. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a></code> | target block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource.property.name"></a>

```go
Name *string
```

- *Type:* *string

name is the name of the resource in question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource.property.target"></a>

```go
Target HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget <a name="HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget {
	Type: *string,
	AverageUtilization: *f64,
	AverageValue: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.type">Type</a></code> | <code>*string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.averageUtilization">AverageUtilization</a></code> | <code>*f64</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.averageValue">AverageValue</a></code> | <code>*string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.value">Value</a></code> | <code>*string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.type"></a>

```go
Type *string
```

- *Type:* *string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.averageUtilization"></a>

```go
AverageUtilization *f64
```

- *Type:* *f64

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.averageValue"></a>

```go
AverageValue *string
```

- *Type:* *string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.value"></a>

```go
Value *string
```

- *Type:* *string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef <a name="HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

&horizontalpodautoscalerv2beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef {
	Kind: *string,
	Name: *string,
	ApiVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.kind">Kind</a></code> | <code>*string</code> | Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.name">Name</a></code> | <code>*string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | API version of the referent. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#kind HorizontalPodAutoscalerV2Beta2#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.apiVersion"></a>

```go
ApiVersion *string
```

- *Type:* *string

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v2beta2#api_version HorizontalPodAutoscalerV2Beta2#api_version}

---

## Classes <a name="Classes" id="Classes"></a>

### HorizontalPodAutoscalerV2Beta2MetadataOutputReference <a name="HorizontalPodAutoscalerV2Beta2MetadataOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a>

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleDown">PutScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleUp">PutScaleUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resetScaleDown">ResetScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resetScaleUp">ResetScaleUp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleDown` <a name="PutScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleDown"></a>

```go
func PutScaleDown(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleDown.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScaleUp` <a name="PutScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleUp"></a>

```go
func PutScaleUp(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleUp.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetScaleDown` <a name="ResetScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resetScaleDown"></a>

```go
func ResetScaleDown()
```

##### `ResetScaleUp` <a name="ResetScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resetScaleUp"></a>

```go
func ResetScaleUp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleDown">ScaleDown</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleUp">ScaleUp</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleDownInput">ScaleDownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleUpInput">ScaleUpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleDown`<sup>Required</sup> <a name="ScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleDown"></a>

```go
func ScaleDown() HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList</a>

---

##### `ScaleUp`<sup>Required</sup> <a name="ScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleUp"></a>

```go
func ScaleUp() HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList</a>

---

##### `ScaleDownInput`<sup>Optional</sup> <a name="ScaleDownInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleDownInput"></a>

```go
func ScaleDownInput() interface{}
```

- *Type:* interface{}

---

##### `ScaleUpInput`<sup>Optional</sup> <a name="ScaleUpInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleUpInput"></a>

```go
func ScaleUpInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecBehavior
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a>

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.get"></a>

```go
func Get(index *f64) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resetSelectPolicy">ResetSelectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resetStabilizationWindowSeconds">ResetStabilizationWindowSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicy` <a name="PutPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.putPolicy"></a>

```go
func PutPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.putPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSelectPolicy` <a name="ResetSelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resetSelectPolicy"></a>

```go
func ResetSelectPolicy()
```

##### `ResetStabilizationWindowSeconds` <a name="ResetStabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resetStabilizationWindowSeconds"></a>

```go
func ResetStabilizationWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.policyInput">PolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.selectPolicyInput">SelectPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSecondsInput">StabilizationWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.selectPolicy">SelectPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.policy"></a>

```go
func Policy() HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.policyInput"></a>

```go
func PolicyInput() interface{}
```

- *Type:* interface{}

---

##### `SelectPolicyInput`<sup>Optional</sup> <a name="SelectPolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.selectPolicyInput"></a>

```go
func SelectPolicyInput() *string
```

- *Type:* *string

---

##### `StabilizationWindowSecondsInput`<sup>Optional</sup> <a name="StabilizationWindowSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSecondsInput"></a>

```go
func StabilizationWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `SelectPolicy`<sup>Required</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.selectPolicy"></a>

```go
func SelectPolicy() *string
```

- *Type:* *string

---

##### `StabilizationWindowSeconds`<sup>Required</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSeconds"></a>

```go
func StabilizationWindowSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.get"></a>

```go
func Get(index *f64) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.get"></a>

```go
func Get(index *f64) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resetSelectPolicy">ResetSelectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resetStabilizationWindowSeconds">ResetStabilizationWindowSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicy` <a name="PutPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.putPolicy"></a>

```go
func PutPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.putPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSelectPolicy` <a name="ResetSelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resetSelectPolicy"></a>

```go
func ResetSelectPolicy()
```

##### `ResetStabilizationWindowSeconds` <a name="ResetStabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resetStabilizationWindowSeconds"></a>

```go
func ResetStabilizationWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.policyInput">PolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.selectPolicyInput">SelectPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSecondsInput">StabilizationWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.selectPolicy">SelectPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.policy"></a>

```go
func Policy() HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.policyInput"></a>

```go
func PolicyInput() interface{}
```

- *Type:* interface{}

---

##### `SelectPolicyInput`<sup>Optional</sup> <a name="SelectPolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.selectPolicyInput"></a>

```go
func SelectPolicyInput() *string
```

- *Type:* *string

---

##### `StabilizationWindowSecondsInput`<sup>Optional</sup> <a name="StabilizationWindowSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSecondsInput"></a>

```go
func StabilizationWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `SelectPolicy`<sup>Required</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.selectPolicy"></a>

```go
func SelectPolicy() *string
```

- *Type:* *string

---

##### `StabilizationWindowSeconds`<sup>Required</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSeconds"></a>

```go
func StabilizationWindowSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.get"></a>

```go
func Get(index *f64) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.putTarget"></a>

```go
func PutTarget(value HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.containerInput">ContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.target"></a>

```go
func Target() HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.containerInput"></a>

```go
func ContainerInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.targetInput"></a>

```go
func TargetInput() HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetAverageUtilization"></a>

```go
func ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetAverageValue"></a>

```go
func ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageUtilizationInput"></a>

```go
func AverageUtilizationInput() *f64
```

- *Type:* *f64

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageValueInput"></a>

```go
func AverageValueInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageUtilization"></a>

```go
func AverageUtilization() *f64
```

- *Type:* *f64

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageValue"></a>

```go
func AverageValue() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.putSelector"></a>

```go
func PutSelector(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.resetSelector"></a>

```go
func ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.selectorInput">SelectorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.selector"></a>

```go
func Selector() HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.selectorInput"></a>

```go
func SelectorInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.get"></a>

```go
func Get(index *f64) HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.get"></a>

```go
func Get(index *f64) HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.putMatchExpressions"></a>

```go
func PutMatchExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resetMatchExpressions"></a>

```go
func ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resetMatchLabels"></a>

```go
func ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressions"></a>

```go
func MatchExpressions() HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```go
func MatchExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchLabelsInput"></a>

```go
func MatchLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchLabels"></a>

```go
func MatchLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putMetric"></a>

```go
func PutMetric(value HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putTarget"></a>

```go
func PutTarget(value HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.metric"></a>

```go
func Metric() HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.target"></a>

```go
func Target() HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.metricInput"></a>

```go
func MetricInput() HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.targetInput"></a>

```go
func TargetInput() HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricExternal
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetAverageUtilization"></a>

```go
func ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetAverageValue"></a>

```go
func ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageUtilizationInput"></a>

```go
func AverageUtilizationInput() *f64
```

- *Type:* *f64

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageValueInput"></a>

```go
func AverageValueInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageUtilization"></a>

```go
func AverageUtilization() *f64
```

- *Type:* *f64

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageValue"></a>

```go
func AverageValue() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.get"></a>

```go
func Get(index *f64) HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.apiVersionInput"></a>

```go
func ApiVersionInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.apiVersion"></a>

```go
func ApiVersion() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.putSelector"></a>

```go
func PutSelector(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.resetSelector"></a>

```go
func ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.selectorInput">SelectorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.selector"></a>

```go
func Selector() HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.selectorInput"></a>

```go
func SelectorInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.get"></a>

```go
func Get(index *f64) HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.get"></a>

```go
func Get(index *f64) HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.putMatchExpressions"></a>

```go
func PutMatchExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resetMatchExpressions"></a>

```go
func ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resetMatchLabels"></a>

```go
func ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressions"></a>

```go
func MatchExpressions() HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```go
func MatchExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchLabelsInput"></a>

```go
func MatchLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchLabels"></a>

```go
func MatchLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putDescribedObject">PutDescribedObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDescribedObject` <a name="PutDescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putDescribedObject"></a>

```go
func PutDescribedObject(value HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putDescribedObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putMetric"></a>

```go
func PutMetric(value HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putTarget"></a>

```go
func PutTarget(value HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.describedObject">DescribedObject</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.describedObjectInput">DescribedObjectInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescribedObject`<sup>Required</sup> <a name="DescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.describedObject"></a>

```go
func DescribedObject() HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.metric"></a>

```go
func Metric() HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.target"></a>

```go
func Target() HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference</a>

---

##### `DescribedObjectInput`<sup>Optional</sup> <a name="DescribedObjectInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.describedObjectInput"></a>

```go
func DescribedObjectInput() HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.metricInput"></a>

```go
func MetricInput() HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.targetInput"></a>

```go
func TargetInput() HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricObject
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetAverageUtilization"></a>

```go
func ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetAverageValue"></a>

```go
func ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageUtilizationInput"></a>

```go
func AverageUtilizationInput() *f64
```

- *Type:* *f64

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageValueInput"></a>

```go
func AverageValueInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageUtilization"></a>

```go
func AverageUtilization() *f64
```

- *Type:* *f64

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageValue"></a>

```go
func AverageValue() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putContainerResource">PutContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putExternal">PutExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putObject">PutObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putPods">PutPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetContainerResource">ResetContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetExternal">ResetExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetPods">ResetPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerResource` <a name="PutContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putContainerResource"></a>

```go
func PutContainerResource(value HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putContainerResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a>

---

##### `PutExternal` <a name="PutExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putExternal"></a>

```go
func PutExternal(value HorizontalPodAutoscalerV2Beta2SpecMetricExternal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putExternal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a>

---

##### `PutObject` <a name="PutObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putObject"></a>

```go
func PutObject(value HorizontalPodAutoscalerV2Beta2SpecMetricObject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a>

---

##### `PutPods` <a name="PutPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putPods"></a>

```go
func PutPods(value HorizontalPodAutoscalerV2Beta2SpecMetricPods)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putPods.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a>

---

##### `PutResource` <a name="PutResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putResource"></a>

```go
func PutResource(value HorizontalPodAutoscalerV2Beta2SpecMetricResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a>

---

##### `ResetContainerResource` <a name="ResetContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetContainerResource"></a>

```go
func ResetContainerResource()
```

##### `ResetExternal` <a name="ResetExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetExternal"></a>

```go
func ResetExternal()
```

##### `ResetObject` <a name="ResetObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetObject"></a>

```go
func ResetObject()
```

##### `ResetPods` <a name="ResetPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetPods"></a>

```go
func ResetPods()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.containerResource">ContainerResource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.external">External</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.object">Object</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.pods">Pods</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.containerResourceInput">ContainerResourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.externalInput">ExternalInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.objectInput">ObjectInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.podsInput">PodsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.resourceInput">ResourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerResource`<sup>Required</sup> <a name="ContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.containerResource"></a>

```go
func ContainerResource() HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference</a>

---

##### `External`<sup>Required</sup> <a name="External" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.external"></a>

```go
func External() HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference</a>

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.object"></a>

```go
func Object() HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference</a>

---

##### `Pods`<sup>Required</sup> <a name="Pods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.pods"></a>

```go
func Pods() HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference</a>

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.resource"></a>

```go
func Resource() HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference</a>

---

##### `ContainerResourceInput`<sup>Optional</sup> <a name="ContainerResourceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.containerResourceInput"></a>

```go
func ContainerResourceInput() HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a>

---

##### `ExternalInput`<sup>Optional</sup> <a name="ExternalInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.externalInput"></a>

```go
func ExternalInput() HorizontalPodAutoscalerV2Beta2SpecMetricExternal
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a>

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.objectInput"></a>

```go
func ObjectInput() HorizontalPodAutoscalerV2Beta2SpecMetricObject
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a>

---

##### `PodsInput`<sup>Optional</sup> <a name="PodsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.podsInput"></a>

```go
func PodsInput() HorizontalPodAutoscalerV2Beta2SpecMetricPods
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.resourceInput"></a>

```go
func ResourceInput() HorizontalPodAutoscalerV2Beta2SpecMetricResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.putSelector"></a>

```go
func PutSelector(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.resetSelector"></a>

```go
func ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.selectorInput">SelectorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.selector"></a>

```go
func Selector() HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.selectorInput"></a>

```go
func SelectorInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.get"></a>

```go
func Get(index *f64) HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.get"></a>

```go
func Get(index *f64) HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.putMatchExpressions"></a>

```go
func PutMatchExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resetMatchExpressions"></a>

```go
func ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resetMatchLabels"></a>

```go
func ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressions"></a>

```go
func MatchExpressions() HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```go
func MatchExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchLabelsInput"></a>

```go
func MatchLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchLabels"></a>

```go
func MatchLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putMetric"></a>

```go
func PutMetric(value HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putTarget"></a>

```go
func PutTarget(value HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.metric"></a>

```go
func Metric() HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.target"></a>

```go
func Target() HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.metricInput"></a>

```go
func MetricInput() HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.targetInput"></a>

```go
func TargetInput() HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricPods
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetAverageUtilization"></a>

```go
func ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetAverageValue"></a>

```go
func ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageUtilizationInput"></a>

```go
func AverageUtilizationInput() *f64
```

- *Type:* *f64

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageValueInput"></a>

```go
func AverageValueInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageUtilization"></a>

```go
func AverageUtilization() *f64
```

- *Type:* *f64

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageValue"></a>

```go
func AverageValue() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.putTarget"></a>

```go
func PutTarget(value HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.target"></a>

```go
func Target() HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.targetInput"></a>

```go
func TargetInput() HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricResource
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetAverageUtilization"></a>

```go
func ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetAverageValue"></a>

```go
func ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageUtilizationInput"></a>

```go
func AverageUtilizationInput() *f64
```

- *Type:* *f64

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageValueInput"></a>

```go
func AverageValueInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageUtilization"></a>

```go
func AverageUtilization() *f64
```

- *Type:* *f64

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageValue"></a>

```go
func AverageValue() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a>

---


### HorizontalPodAutoscalerV2Beta2SpecOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putBehavior">PutBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putScaleTargetRef">PutScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetMinReplicas">ResetMinReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetTargetCpuUtilizationPercentage">ResetTargetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBehavior` <a name="PutBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putBehavior"></a>

```go
func PutBehavior(value HorizontalPodAutoscalerV2Beta2SpecBehavior)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putMetric"></a>

```go
func PutMetric(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putMetric.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScaleTargetRef` <a name="PutScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putScaleTargetRef"></a>

```go
func PutScaleTargetRef(value HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putScaleTargetRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a>

---

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetBehavior"></a>

```go
func ResetBehavior()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetMinReplicas` <a name="ResetMinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetMinReplicas"></a>

```go
func ResetMinReplicas()
```

##### `ResetTargetCpuUtilizationPercentage` <a name="ResetTargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetTargetCpuUtilizationPercentage"></a>

```go
func ResetTargetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.behavior">Behavior</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference">HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList">HorizontalPodAutoscalerV2Beta2SpecMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.scaleTargetRef">ScaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.metricInput">MetricInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.minReplicasInput">MinReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.scaleTargetRefInput">ScaleTargetRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.targetCpuUtilizationPercentageInput">TargetCpuUtilizationPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.minReplicas">MinReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.targetCpuUtilizationPercentage">TargetCpuUtilizationPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.behavior"></a>

```go
func Behavior() HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference">HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.metric"></a>

```go
func Metric() HorizontalPodAutoscalerV2Beta2SpecMetricList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList">HorizontalPodAutoscalerV2Beta2SpecMetricList</a>

---

##### `ScaleTargetRef`<sup>Required</sup> <a name="ScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.scaleTargetRef"></a>

```go
func ScaleTargetRef() HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference</a>

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.behaviorInput"></a>

```go
func BehaviorInput() HorizontalPodAutoscalerV2Beta2SpecBehavior
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a>

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.maxReplicasInput"></a>

```go
func MaxReplicasInput() *f64
```

- *Type:* *f64

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.metricInput"></a>

```go
func MetricInput() interface{}
```

- *Type:* interface{}

---

##### `MinReplicasInput`<sup>Optional</sup> <a name="MinReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.minReplicasInput"></a>

```go
func MinReplicasInput() *f64
```

- *Type:* *f64

---

##### `ScaleTargetRefInput`<sup>Optional</sup> <a name="ScaleTargetRefInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.scaleTargetRefInput"></a>

```go
func ScaleTargetRefInput() HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a>

---

##### `TargetCpuUtilizationPercentageInput`<sup>Optional</sup> <a name="TargetCpuUtilizationPercentageInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.targetCpuUtilizationPercentageInput"></a>

```go
func TargetCpuUtilizationPercentageInput() *f64
```

- *Type:* *f64

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.maxReplicas"></a>

```go
func MaxReplicas() *f64
```

- *Type:* *f64

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.minReplicas"></a>

```go
func MinReplicas() *f64
```

- *Type:* *f64

---

##### `TargetCpuUtilizationPercentage`<sup>Required</sup> <a name="TargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.targetCpuUtilizationPercentage"></a>

```go
func TargetCpuUtilizationPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a>

---


### HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/horizontalpodautoscalerv2beta2"

horizontalpodautoscalerv2beta2.NewHorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.resetApiVersion">ResetApiVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiVersion` <a name="ResetApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.resetApiVersion"></a>

```go
func ResetApiVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.apiVersionInput"></a>

```go
func ApiVersionInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.apiVersion"></a>

```go
func ApiVersion() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a>

---



