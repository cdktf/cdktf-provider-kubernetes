# `clusterRoleBinding` Submodule <a name="`clusterRoleBinding` Submodule" id="@cdktf/provider-kubernetes.clusterRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterRoleBinding <a name="ClusterRoleBinding" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding kubernetes_cluster_role_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ClusterRoleBinding(Construct Scope, string Id, ClusterRoleBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig">ClusterRoleBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig">ClusterRoleBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.putRoleRef">PutRoleRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.putSubject">PutSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.putMetadata"></a>

```csharp
private void PutMetadata(ClusterRoleBindingMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata">ClusterRoleBindingMetadata</a>

---

##### `PutRoleRef` <a name="PutRoleRef" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.putRoleRef"></a>

```csharp
private void PutRoleRef(ClusterRoleBindingRoleRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.putRoleRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef">ClusterRoleBindingRoleRef</a>

---

##### `PutSubject` <a name="PutSubject" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.putSubject"></a>

```csharp
private void PutSubject(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.putSubject.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ClusterRoleBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

ClusterRoleBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

ClusterRoleBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

ClusterRoleBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

ClusterRoleBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ClusterRoleBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClusterRoleBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClusterRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ClusterRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference">ClusterRoleBindingMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.roleRef">RoleRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference">ClusterRoleBindingRoleRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.subject">Subject</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList">ClusterRoleBindingSubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata">ClusterRoleBindingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.roleRefInput">RoleRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef">ClusterRoleBindingRoleRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.subjectInput">SubjectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.metadata"></a>

```csharp
public ClusterRoleBindingMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference">ClusterRoleBindingMetadataOutputReference</a>

---

##### `RoleRef`<sup>Required</sup> <a name="RoleRef" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.roleRef"></a>

```csharp
public ClusterRoleBindingRoleRefOutputReference RoleRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference">ClusterRoleBindingRoleRefOutputReference</a>

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.subject"></a>

```csharp
public ClusterRoleBindingSubjectList Subject { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList">ClusterRoleBindingSubjectList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.metadataInput"></a>

```csharp
public ClusterRoleBindingMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata">ClusterRoleBindingMetadata</a>

---

##### `RoleRefInput`<sup>Optional</sup> <a name="RoleRefInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.roleRefInput"></a>

```csharp
public ClusterRoleBindingRoleRef RoleRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef">ClusterRoleBindingRoleRef</a>

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.subjectInput"></a>

```csharp
public object SubjectInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterRoleBindingConfig <a name="ClusterRoleBindingConfig" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ClusterRoleBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ClusterRoleBindingMetadata Metadata,
    ClusterRoleBindingRoleRef RoleRef,
    object Subject,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata">ClusterRoleBindingMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.roleRef">RoleRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef">ClusterRoleBindingRoleRef</a></code> | role_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.subject">Subject</a></code> | <code>object</code> | subject block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#id ClusterRoleBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.metadata"></a>

```csharp
public ClusterRoleBindingMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata">ClusterRoleBindingMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#metadata ClusterRoleBinding#metadata}

---

##### `RoleRef`<sup>Required</sup> <a name="RoleRef" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.roleRef"></a>

```csharp
public ClusterRoleBindingRoleRef RoleRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef">ClusterRoleBindingRoleRef</a>

role_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#role_ref ClusterRoleBinding#role_ref}

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.subject"></a>

```csharp
public object Subject { get; set; }
```

- *Type:* object

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#subject ClusterRoleBinding#subject}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#id ClusterRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ClusterRoleBindingMetadata <a name="ClusterRoleBindingMetadata" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ClusterRoleBindingMetadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata.property.name">Name</a></code> | <code>string</code> | Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#annotations ClusterRoleBinding#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#generate_name ClusterRoleBinding#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#labels ClusterRoleBinding#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#name ClusterRoleBinding#name}

---

### ClusterRoleBindingRoleRef <a name="ClusterRoleBindingRoleRef" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ClusterRoleBindingRoleRef {
    string ApiGroup,
    string Kind,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef.property.apiGroup">ApiGroup</a></code> | <code>string</code> | The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef.property.kind">Kind</a></code> | <code>string</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef.property.name">Name</a></code> | <code>string</code> | The name of the User to bind to. |

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef.property.apiGroup"></a>

```csharp
public string ApiGroup { get; set; }
```

- *Type:* string

The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#api_group ClusterRoleBinding#api_group}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#kind ClusterRoleBinding#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the User to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#name ClusterRoleBinding#name}

---

### ClusterRoleBindingSubject <a name="ClusterRoleBindingSubject" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ClusterRoleBindingSubject {
    string Kind,
    string Name,
    string ApiGroup = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubject.property.kind">Kind</a></code> | <code>string</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubject.property.name">Name</a></code> | <code>string</code> | The name of the resource to bind to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubject.property.apiGroup">ApiGroup</a></code> | <code>string</code> | The API group of the subject resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubject.property.namespace">Namespace</a></code> | <code>string</code> | The Namespace of the subject resource. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubject.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#kind ClusterRoleBinding#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubject.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the resource to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#name ClusterRoleBinding#name}

---

##### `ApiGroup`<sup>Optional</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubject.property.apiGroup"></a>

```csharp
public string ApiGroup { get; set; }
```

- *Type:* string

The API group of the subject resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#api_group ClusterRoleBinding#api_group}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubject.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The Namespace of the subject resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/cluster_role_binding#namespace ClusterRoleBinding#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterRoleBindingMetadataOutputReference <a name="ClusterRoleBindingMetadataOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ClusterRoleBindingMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata">ClusterRoleBindingMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadataOutputReference.property.internalValue"></a>

```csharp
public ClusterRoleBindingMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingMetadata">ClusterRoleBindingMetadata</a>

---


### ClusterRoleBindingRoleRefOutputReference <a name="ClusterRoleBindingRoleRefOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ClusterRoleBindingRoleRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.apiGroupInput">ApiGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.apiGroup">ApiGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef">ClusterRoleBindingRoleRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGroupInput`<sup>Optional</sup> <a name="ApiGroupInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.apiGroupInput"></a>

```csharp
public string ApiGroupInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.apiGroup"></a>

```csharp
public string ApiGroup { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRefOutputReference.property.internalValue"></a>

```csharp
public ClusterRoleBindingRoleRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingRoleRef">ClusterRoleBindingRoleRef</a>

---


### ClusterRoleBindingSubjectList <a name="ClusterRoleBindingSubjectList" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ClusterRoleBindingSubjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.get"></a>

```csharp
private ClusterRoleBindingSubjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ClusterRoleBindingSubjectOutputReference <a name="ClusterRoleBindingSubjectOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ClusterRoleBindingSubjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.resetApiGroup">ResetApiGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiGroup` <a name="ResetApiGroup" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.resetApiGroup"></a>

```csharp
private void ResetApiGroup()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.apiGroupInput">ApiGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.apiGroup">ApiGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGroupInput`<sup>Optional</sup> <a name="ApiGroupInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.apiGroupInput"></a>

```csharp
public string ApiGroupInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.apiGroup"></a>

```csharp
public string ApiGroup { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.clusterRoleBinding.ClusterRoleBindingSubjectOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



